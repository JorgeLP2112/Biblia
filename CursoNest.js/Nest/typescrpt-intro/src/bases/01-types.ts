// Hay que evitar poner código ejecutable en los archivos de definición de tipos
// Export permite ejecutar la variable en otro archivo
// Poner :string al final de la variable es una buena práctica para que TypeScript sepa que es un string
// Aunque no es necesario porque TypeScript puede inferir el tipo de la variable
export const Name: string = "Jorge";
export const age: number = 21;
export const templateString: string = `Hola, mi nombre es ${Name} y tengo ${age} años`; // Son strings con comillas invertidas para maximizar la interpolación de variables
