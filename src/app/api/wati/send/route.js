export async function POST(req) {
  try {
    const { phone, name, total } = await req.json();

    const response = await fetch(
      "https://live-server.wati.io/api/v1/sendTemplateMessage",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer wati_f4caa084-4e0b-4674-9134-8e7acdf5cbb4.a41Lz3VAkfWgC50a3-gcVgZkxPeg6k7MsVFKgS--xuIrJT_UCazYtivoDrjJkm0WpLb-jcSBrgWFjfg9kdjUzRt2eqKilkhD_eGoKsXS6OGUPFjvtk_2auUv4a3RhbNe
`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          whatsappNumber: phone,
          template_name: "quotation_alert",
          broadcast_name: "lead_notificatixon",
          parameters: [
            { name: "1", value: name },
            { name: "2", value: `Your quotation is ready. ₹${total}` },
          ],
        }),
      },
    );

    const data = await response.json();

    return Response.json({ success: true, data });
  } catch (err) {
    return Response.json({ success: false, error: err.message });
  }
}
