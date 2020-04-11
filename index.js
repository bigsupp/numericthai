const translate = (value, opt) => {
  value = parseInt(value)
  switch (value) {
    case 0:
      return ``
    case 1:
      if (opt && opt.lastDigit) return `เอ็ด`;
      else return `หนึ่ง`;
    case 2:
      if (opt && opt.tens) return `ยี่`;
      return `สอง`
    case 3:
      return `สาม`
    case 4:
      return `สี่`
    case 5:
      return `ห้า`
    case 6:
      return `หก`
    case 7:
      return `เจ็ด`
    case 8:
      return `แปด`
    case 9:
      return `เก้า`
  }
}

const unit = (scale, opt) => {
  switch (scale) {
    case 0:
      if (opt && opt.lastDigit) return ``;
      else return `ศูนย์`
    case 1:
      return `สิบ`
    case 2:
      return `ร้อย`
    case 3:
      return `พัน`
    case 4:
      return `หมื่น`
    case 5:
      return `แสน`
    case 6:
      return `ล้าน`
  }
}

module.exports = (value) => {
  const integer = Math.floor(value)
  const integerParts = integer.toString().split("")
  let intergerScaleCount = integerParts.length
  const integerWords = integerParts.map((val, idx) => {
    intergerScaleCount--
    const parts = []
    if (idx === integerParts.length - 1) {
      parts.push(translate(val, {
        lastDigit: true
      }))
      parts.push(val > 0 ? unit(intergerScaleCount, {
        lastDigit: true
      }) : ``)
      return parts.join("")
    }
    if (intergerScaleCount === 1 && parseInt(val) === 1) {
      parts.push(unit(intergerScaleCount))
      return parts.join("")
    }
    if (intergerScaleCount === 1 && parseInt(val) === 2) {
      parts.push(translate(val, {
        tens: true
      }))
      parts.push(unit(intergerScaleCount))
      return parts.join("")
    }
    parts.push(translate(val))
    parts.push(val > 0 ? unit(intergerScaleCount) : ``)
    return parts.join("")
  })
  return integerWords.join("")
}