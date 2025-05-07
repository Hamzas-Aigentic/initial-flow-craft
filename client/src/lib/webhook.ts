/**
 * Utility functions for interacting with webhooks
 */

/**
 * Send data to the specified webhook URL
 */
export async function sendToWebhook(
  webhookUrl: string, 
  data: Record<string, any>
): Promise<boolean> {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    // Check if the webhook request was successful
    if (!response.ok) {
      throw new Error(`Webhook error: ${response.status}`);
    }
    
    return true;
  } catch (error) {
    console.error('Webhook call failed:', error);
    return false;
  }
}