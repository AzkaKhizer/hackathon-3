// app/success/page.tsx
export default function SuccessPage() {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-600">Thank you for your purchase.</p>
        <a href="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Continue Shopping
        </a>
      </div>
    );
  }