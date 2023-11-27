import Image from 'next/image'
import Calculator from './components/Calculator';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Game Calculator</h1>
      <Calculator />
    </main>
  );
}
