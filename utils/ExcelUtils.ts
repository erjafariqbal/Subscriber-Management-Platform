import xlsx from 'xlsx'

export class ExcelUtils {

    //FilePath
    //SheetName

    static getExcelData(filePath:string, SheetName: string){

       try{
         
        //Step 1: Read the file using readfile using filePath
        const excelWorkbook = xlsx.readFile(filePath) 
        // Step 2: Store the list of Shaeet Name from the Excel File
        // By Providing the key we can collect the object Name 

        const excelSheet = excelWorkbook.Sheets[SheetName]
        //Step 3: convert all the Specific sheet data in Jsom Using Sheet to Json property
        const data = xlsx.utils.sheet_to_json(excelSheet)

        return data
       }

       catch(error){
          
        console.error(error)

       }
       



    }

}

const data = ExcelUtils.getExcelData("/Users/zafariqbal/Procare/testdata/userName.xlsx", "userdata")

console.log(data)

