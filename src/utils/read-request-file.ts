import XLSX from 'xlsx'

interface RequestProps {
  'E-mail institucional': string
  'Órgão de origem aderido à ReGIC': string
}

export function readRequestFile() {
  // Lê o arquivo
  const workbook = XLSX.readFile('request.xlsx')

  // Obtém o nome da primeira aba
  const sheetName = workbook.SheetNames[0]

  // Obtém a aba como um objeto
  const worksheet = workbook.Sheets[sheetName]

  // Converte a aba em um JSON
  const data: RequestProps[] = XLSX.utils.sheet_to_json(worksheet)

  const fileRequestsUnfiltered = data.map(request => {
    const body = request['Órgão de origem aderido à ReGIC']
      .substring(
        request['Órgão de origem aderido à ReGIC'].indexOf(' '),
        request['Órgão de origem aderido à ReGIC'].length
      )
      .trim()
    return {
      email: request['E-mail institucional'],
      body,
      abbreviation: request['Órgão de origem aderido à ReGIC'].split(' ')[0],
    }
  })

  const fileRequests = fileRequestsUnfiltered.filter(
    (obj, index, self) => index === self.findIndex(o => o.email === obj.email)
  )
  return { fileRequests }
}
