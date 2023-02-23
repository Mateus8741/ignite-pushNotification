import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.sendTags({
    user_id: "123456789",
    user_name: "John Doe",
    user_email: "test@test.com",
    user_phone: "1234567890",
  });
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.sendTag("cart_items_count", itemsCount);
}
