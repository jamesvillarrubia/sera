interface FormData {
  [key: string]: string | boolean | undefined;
}

const GOOGLE_SHEETS_API_ENDPOINT = 'YOUR_GOOGLE_SHEETS_API_ENDPOINT';

export const submitToGoogleSheets = async (formData: FormData): Promise<boolean> => {
  try {
    const response = await fetch(GOOGLE_SHEETS_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
};
