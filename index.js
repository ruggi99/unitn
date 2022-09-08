const input = document.getElementById("input");

const output = document.getElementById("output");

input.addEventListener("input", (e) => {
  const text = e.target.value;
  try {
    output.innerText = transform(text);
  } catch {}
});

function transform(str) {
  const url = new URL(str);
  const mySearchParams = new URLSearchParams();

  for (const key of [
    "anno",
    "include",
    "corso",
    "anno2[]",
    "ar_codes_",
    "ar_select_",
  ]) {
    mySearchParams.set(key, url.searchParams.getAll(key).filter(Boolean));
  }

  const path =
    "https://easyacademy.unitn.it/AgendaStudentiUnitn/export/ec_download_ical_list.php?";
  return path + mySearchParams.toString();
}
