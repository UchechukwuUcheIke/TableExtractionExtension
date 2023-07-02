const tesseractWorkerPath = 'worker-overwrites.js';
const tesseractLangPath = 'tesseract/lang-data/4.0.0_best';
const tesseractCorePath = 'tesseract/tesseract-core.wasm.js';

console.log("Background.js")
/** 
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // 2. A page requested user data, respond with a copy of `user`
    if (message === 'get-user-data') {
      sendResponse(user);
    }
  });

  async function fun () {
    console.log(chrome.runtime.getURL(tesseractWorkerPath))
    const worker = Tesseract.createWorker({
      workerPath: chrome.runtime.getURL(tesseractWorkerPath),
      langPath: chrome.runtime.getURL(tesseractLangPath),
      corePath: chrome.runtime.getURL(tesseractCorePath),
      logger: msg => {
          console.log(msg);
      }
    });
  
    Tesseract.setLogging(true);
  
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
  
    const result = worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    console.log(result);
  }
  
  setTimeout(console.log("Running fun"), 9000);
  setTimeout(fun, 10000);
  */