import { dateToString, toTimeString } from "../lib/datetime";

export async function sendOrderToTg(order: Order, quest: Quest) {
  const fields = [
    `New order was created at ${order.createdAt.toLocaleString("ru")}\n`,
    `<b>Name:</b> ${order.name}\n`,
    `<b>Phone:</b> ${order.phone}\n`,
    `<b>Person count:</b> ${order.personCount}\n`,
    `<b>Quest:</b> ${quest.name}\n`,
    `<b>Location:</b> ${quest.address.place}\n`,
    `<b>Time:</b> ${dateToString(order.dateTime)} ${toTimeString(order.dateTime)}\n`,
    `Navigate to <a href="${process.env.BASE_URL}/admin/orders">orders list</a>`,
  ];

  let msg = "";
  for (const field of fields) {
    msg += field;
  }

  const encodedMsg = encodeURIComponent(msg);

  fetch(
    `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage?chat_id=${process.env.TG_CHAT_ID}&parse_mode=html&text=${encodedMsg}`,
  );
}

export async function sendLogsToTg(error: unknown, data: CreateOrderRequest) {
  const encodedMsg = encodeURIComponent(`
      ${error}
      Incoming data: ${JSON.stringify(data)}
      Time: ${new Date().toLocaleString("ru")}
  `);

  fetch(
    `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage?chat_id=${process.env.TG_LOGS_CHAT_ID}&parse_mode=html&text=${encodedMsg}`,
  );
}

export async function sendCertToTg(certificate: CertificateOrder) {
  const fields = [
    `Была отправлена заявка на заказ сертификата\n`,
    `<b>Имя:</b> ${certificate.name}\n`,
    `<b>Телефон:</b> ${certificate.phone}\n`,
    `<b>Время отправки:</b> ${dateToString(certificate.createdAt)} ${toTimeString(certificate.createdAt)}\n`,
    `Перейти к <a href="${process.env.BASE_URL}/admin/certificate-orders">сертификатам</a>`,
  ];

  let msg = "";
  for (const field of fields) {
    msg += field;
  }

  const encodedMsg = encodeURIComponent(msg);

  fetch(
    `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage?chat_id=${process.env.TG_CHAT_ID}&parse_mode=html&text=${encodedMsg}`,
  );
}
