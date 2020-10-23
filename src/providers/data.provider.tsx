
const URI: String = 'http://acnhapi.com/';
export class DataProvider {
    async fetchVillagers(): Promise<any> {
        const res: Response = await fetch(`${URI}v1/villagers/`);
        return await res.json();
    }
}