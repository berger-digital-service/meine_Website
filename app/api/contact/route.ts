import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMPFAENGER = "john-berger@t-online.de";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY fehlt");
    return NextResponse.json(
      { error: "Server-Konfiguration fehlerhaft." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Bitte alle Felder ausfüllen." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Berger Digital Service <onboarding@resend.dev>",
      to: EMPFAENGER,
      replyTo: email,
      subject: `Neue Anfrage über die Website von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Senden fehlgeschlagen." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Senden fehlgeschlagen." },
      { status: 500 }
    );
  }
}
