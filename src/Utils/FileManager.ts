import fs from "fs";

class FileManager {
    filePath: string;

    public setFilePath(path: string): void {
        this.filePath = path;
    }

    public writeFile(data: any): void {
        fs.writeFileSync(this.filePath, JSON.stringify(data));
    }

    public readFile(): any {
        const data = fs.readFileSync(this.filePath);
        return JSON.parse(data.toString());
    }
}

export default new FileManager();
