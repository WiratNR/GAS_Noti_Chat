function sendChatNotification() {

  const url = 'https://chat.googleapis.com/v1/spaces/AAAABaUuyZo/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=8YDP4JCX4olOHDoZXhDDooB9xxhYO8-DA98SiBxkkvQ'

  var message = {
    "cards": [
      {
        "header": {
          "title": "แจ้งเตือน"
        },
        "sections": [
          {
            "widgets": [
              {
                "image": {
                  "imageUrl": "https://www.gstatic.com/images/branding/productlogos/gsuite_dashboard/v6/web-512dp/logo_gsuite_dashboard_color_2x_web_512dp.png", // URL ของรูปภาพ
                  "onClick": {
                    "openLink": {
                      "url": "https://www.gstatic.com/images/branding/productlogos/gsuite_dashboard/v6/web-512dp/logo_gsuite_dashboard_color_2x_web_512dp.png"  // ลิงก์เมื่อคลิกรูป
                    }
                  }
                }
              },
              {
                "textParagraph": {
                  "text": "ข้อความที่ต้องการส่งพร้อมกับรูปภาพ"
                }
              }
            ]
          }
        ]
      }
    ]
  };

  var options = {
    "method": "POST",
    "contentType": "application/json",
    "payload": JSON.stringify(message)
  };

  UrlFetchApp.fetch(url, options);
}
