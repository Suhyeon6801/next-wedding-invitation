type onSuccess = (text: string) => void;

async function copyToClipboard(text: string, onSuccess: onSuccess) {
    try {
        await navigator.clipboard.writeText(text);
        onSuccess(text);
        console.log('Text copied to clipboard:', text);
    } catch (error) {
        console.error('Failed to copy text:', error);
    }
}

export default copyToClipboard;