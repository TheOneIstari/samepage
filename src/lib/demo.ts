export type DemoQuestion = {
  text: string;
  options: string[];
  intended: number;
};

export const MIN_QUESTIONS = 3;
export const MAX_QUESTIONS = 10;

export function canAddQuestion(count: number): boolean {
  return count < MAX_QUESTIONS;
}

export function canRemoveQuestion(count: number): boolean {
  return count > MIN_QUESTIONS;
}

export function countDifferences(questions: DemoQuestion[], answers: Array<number | null>): number {
  return questions.reduce((total, question, index) => total + (answers[index] !== question.intended ? 1 : 0), 0);
}

export function matchesQuestionnaire(
  questionnaire: { search: string; status: string },
  query: string,
  status: string,
): boolean {
  const textMatches = questionnaire.search.toLowerCase().includes(query.trim().toLowerCase());
  const statusMatches = status === 'all' || questionnaire.status === status;
  return textMatches && statusMatches;
}
