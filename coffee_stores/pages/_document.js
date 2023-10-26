import Document, {Html,Main,NextScript,Head} from "next/document"



class MyDocument extends Document {
  render() {
    return (
        <Html lang="en">
          <Head>
             
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
    )
    }
}

export default MyDocument
