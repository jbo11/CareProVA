exports.handler = async function(event, context) {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxlXQiWqv7_Gyacze-CWqasynUw1jPO4TdA74EuLZQf3IRXQ_htZtbIMA5cwlis9Yd_/exec"
  );

  const body = await response.text();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: body
  };
};