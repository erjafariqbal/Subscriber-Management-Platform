import xlsx from 'xlsx'

export class ExcelUtils {

    static getExcelData(filePath: string, SheetName: string): Record<string, any>[] {

        const excelWorkbook = xlsx.readFile(filePath)
        const excelSheet = excelWorkbook.Sheets[SheetName]
        return xlsx.utils.sheet_to_json<Record<string, any>>(excelSheet)

    }

}
