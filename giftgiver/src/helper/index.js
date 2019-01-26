export const max_number = numbers => {
    return numbers.length > 0 ? Math.max(...numbers) : 0; // Math.max(ids[0], ids[1], ids[2], so on)
}