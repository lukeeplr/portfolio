export const validateData = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false
    }
    return true
} 

export const getErrorMessage = (error: unknown): string => {

    let message: string
    
    if (error instanceof Error) {
        message = error.message
    } else if (error && typeof error === 'object' && 'message' in error) { 
        message = String(error.message)
    } else if (typeof error === 'string') {
        message = error
    } else {
        message = 'Algo deu errado'
    }

    return message

}