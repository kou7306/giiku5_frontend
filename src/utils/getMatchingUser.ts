import { getUuidFromCookie } from "@/actions/users";

export interface User {
  user_id: string;
  name: string;
  img_url: string;
  language: string;
  age: number;
  sex: string;
}

// ログインしてるユーザーとマッチングしているユーザー一覧を取得する関数
export const getMatchingUser = async (): Promise<User[]> => {
  try {
    const uuid = await getUuidFromCookie();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(uuid);
    // APIからデータを取得
    const response = await fetch(`${apiUrl}/getMatchingUser`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uuid }),
    });
    // レスポンスをJSONとしてパース
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
};
