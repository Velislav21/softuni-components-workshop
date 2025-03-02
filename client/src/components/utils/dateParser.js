export default function dateParser(date) {
    return new Date(date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}