export class RestaurantBuilder {
    private tables: string[];

    constructor() {
        this.tables = ['alkdsfj', 'adsjf', 'ladfj'];
    }

    public getTables() {
        return this.tables;
    }

    public addTable(tableName: string) {
        this.tables.push(tableName);
    }
}
