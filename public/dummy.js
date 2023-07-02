console.log("Dummy.js")


async function fun () {
  const worker = await Tesseract.createWorker({
    logger: m => {console.log(m)}
  });

  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
  console.log(text);
  await worker.terminate();
}

setTimeout(fun, 5000);