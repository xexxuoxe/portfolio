import { redirect } from 'next/navigation';

export default function SignPage() {
  redirect('/signup/step1');
}