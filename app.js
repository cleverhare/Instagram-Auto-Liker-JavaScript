for (let i = 0; i < 500; i++) {
    let btn = document.querySelectorAll('._abl-')[3]
    let btn2 = document.querySelectorAll('._abl-')[3+2]
    setInterval(() => {
          let btn = document.querySelectorAll('._abl-')[i+2]
            let btn2 = document.querySelectorAll('._abl-')[i+2]
        btn.click()
        btn2.click()
    }, 2000);
}
