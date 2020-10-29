export default function getScoreItemStatus(
  index:number, correctAnswers:number, length:number,
):string {
  if (length - index - 1 === correctAnswers) {
    return "active";
  } if (length - index - 1 < correctAnswers) {
    return "earned";
  }

  return "";
}
