export function verifyPassword(password: string): boolean {
  // Expressão regular: pelo menos 8 caracteres e 1 letra maiúscula
  const regex = /^(?=.*[A-Z]).{8,}$/
  return regex.test(password)
}
