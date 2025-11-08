export async function POST(req:Request) {
  try {
    const body = await req.json();

    console.log("🔔 GitHub webhook event received:", body);

    // ✅ TODO: verify the webhook secret here (recommended)
    // and handle the event (e.g., push, issue, etc.)

    return new Response("Webhook received", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response("Error processing webhook", { status: 500 });
  }
}
