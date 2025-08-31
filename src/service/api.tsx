const Base_Url = "https://quotia.vercel.app/"
export const getQuotes = async () => {
    const response = await fetch(`${Base_Url}?category=happy`)
    if (!response.ok) {
        throw new Error('Failed to fetch quotes')
    }
    const data = await response.json()
    
    return data
}