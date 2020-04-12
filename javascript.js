
const charactorAmountRange = document.getElementById
('charactorAmountRange')
const charactorAmountNumber = document.getElementById
('charactorAmountNumber')

charactorAmountNumber.addEventListener('input', syncCharactorAmount)
charactorAmountRange.addEventListener('input', syncCharactorAmount)

function syncCharacterAmount(e) {
     const value = e.target.value
     charactorAmountNumber.value = value
     charactorAmountRange.value = value


}