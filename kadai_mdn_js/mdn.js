const date = new Date();
const formatted = date.toLocaleDateString('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
console.log(formatted);
