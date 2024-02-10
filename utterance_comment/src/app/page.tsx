"use client";
import Comments, { CommentComponent } from './comments';

export default function Home() {
  return (
    <div>
      <h1>Utterance Comment Example</h1>
      <CommentComponent />
    </div>
  );
}
