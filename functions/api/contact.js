export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    const { name, email, phone, service, date, time, notes } = data;

    // Validate required fields
    if (!name || !email || !phone || !date) {
      return new Response(
        JSON.stringify({ error: "Champs obligatoires manquants" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = context.env.RESEND_API_KEY;
    const toEmail = context.env.RESEND_TO_EMAIL;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "RESEND_API_KEY is not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!toEmail) {
      return new Response(
        JSON.stringify({ error: "RESEND_TO_EMAIL is not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Call Resend API using standard fetch
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: toEmail,
        subject: `Nouveau Rendez-vous : ${service} - ${name}`,
        html: `
          <h2>Nouveau rendez-vous reçu</h2>
          <p><strong>Nom & Prénom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          <p><strong>Motif de rendez-vous :</strong> ${service}</p>
          <p><strong>Date souhaitée :</strong> ${date}</p>
          <p><strong>Créneau horaire :</strong> ${time}</p>
          <p><strong>Demandes spéciales :</strong> ${notes || "Aucune"}</p>
        `
      })
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", result);
      return new Response(
        JSON.stringify({ error: result.message || "Failed to send email" }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully", id: result.id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
