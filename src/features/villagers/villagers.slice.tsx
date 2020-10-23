import { createSlice } from '@reduxjs/toolkit';
import { DataProvider } from '../../providers/data.provider';

export const villagersSlice = createSlice({
	name: 'villagers',
	initialState: {
		list: [],
		selected: null
	},
	reducers: {
		get: (state, action) => {
			state.selected = state.list[action.payload];
		},
		fetchList: (state, action) => {
			state.list = action.payload;
		}
	}
});

export const { get, fetchList } = villagersSlice.actions;

export const fetchListAsync = () => (dispatch: any) => {
	let dataPrv = new DataProvider();
	dataPrv.fetchVillagers().then((res) => {
		dispatch(fetchList(res));
	});
};

export const selectList = (state: any) => state.villagers.list;

export default villagersSlice.reducer;