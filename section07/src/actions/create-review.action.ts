"use server";

import { revalidatePath } from "next/cache";

export async function createReviewAction(formData: FormData) {
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!bookId || !content || !author) {
    return;
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.status);
    
    revalidatePath(`review-${bookId}`);
  } catch (err) {
    console.error("리뷰 작성 중 오류 발생", err);
    return;
  }
}
