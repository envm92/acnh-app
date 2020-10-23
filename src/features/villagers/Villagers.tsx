import React from 'react';
import { useSelector } from 'react-redux';
import {
	selectList
} from './villagers.slice';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export function Villagers () {
	const list = useSelector(selectList);
	const rows = [];
	
	for (const [key, value] of Object.entries(list)) {
		let villager:any = value;
		rows.push(
			<ListItem alignItems="flex-start">
			<ListItemAvatar>
			  <Avatar alt="Remy Sharp" src={villager['icon_uri']} />
			</ListItemAvatar>
			<ListItemText
			  primary={villager['name']['name-USen']}
			  secondary={
				<React.Fragment>
				  <Typography
					component="span"
					variant="body2"
					color="textPrimary"
				  >
					{villager['species']}
				  </Typography>
				</React.Fragment>
			  }
			/>
		  </ListItem>);
	}

	return (
		<List>
			{rows}
		</List>
	);
}