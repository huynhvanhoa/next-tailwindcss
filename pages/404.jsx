import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function NoPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>No Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg__nopage">
        <Link href="/">
          <Image src="/nopage.jpg" alt="No-page" width={400} height={300} />
        </Link>
      </div>
    </>
  );
}

export default NoPage;
