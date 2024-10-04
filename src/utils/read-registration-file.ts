import XLSX from 'xlsx'

interface RegistrationProps {
  'Primeiro Nome': string
  Sobrenome: string
  'Nome Completo (para certificados)': string
  'Confirme o e-mail institucional': string
  'Órgão de origem aderido à ReGIC': string
  'E-mail da ETIR': string
  'A ETIR possui Chave PGP? Insira o link para Download': string
  'Telefone de contato da ETIR (Somente números)': string | number
}

export function readRegistrationFile() {
  // Lê o arquivo
  const workbook = XLSX.readFile('registration.xlsx')

  // Obtém o nome da primeira aba
  const sheetName = workbook.SheetNames[0]

  // Obtém a aba como um objeto
  const worksheet = workbook.Sheets[sheetName]

  // Converte a aba em um JSON
  const data: RegistrationProps[] = XLSX.utils.sheet_to_json(worksheet)

  const fileRegistrationsUnfiltered = data.map(registration => {
    const body = registration['Órgão de origem aderido à ReGIC']
      .substring(
        registration['Órgão de origem aderido à ReGIC'].indexOf(' '),
        registration['Órgão de origem aderido à ReGIC'].length
      )
      .trim()
    return {
      firstName: registration['Primeiro Nome'],
      lastName: registration.Sobrenome,
      fullName: registration['Nome Completo (para certificados)'],
      email: registration['Confirme o e-mail institucional'],
      body,
      abbreviation:
        registration['Órgão de origem aderido à ReGIC'].split(' ')[0],
      etirEmail: registration['E-mail da ETIR'],
      hasPgpKey:
        registration['A ETIR possui Chave PGP? Insira o link para Download'],
      etirPhone: String(
        registration['Telefone de contato da ETIR (Somente números)']
      ),
    }
  })

  const fileRegistrations = fileRegistrationsUnfiltered.filter(
    (obj, index, self) => index === self.findIndex(o => o.email === obj.email)
  )

  return { fileRegistrations }
}
