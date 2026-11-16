import { describe, expect, it } from 'vitest';
import {
  MAX_QUESTIONS,
  MIN_QUESTIONS,
  canAddQuestion,
  canRemoveQuestion,
  countDifferences,
  matchesQuestionnaire,
} from './demo';

describe('questionnaire limits', () => {
  it('enforces the agreed three-to-ten question range', () => {
    expect(canRemoveQuestion(MIN_QUESTIONS)).toBe(false);
    expect(canRemoveQuestion(MIN_QUESTIONS + 1)).toBe(true);
    expect(canAddQuestion(MAX_QUESTIONS - 1)).toBe(true);
    expect(canAddQuestion(MAX_QUESTIONS)).toBe(false);
  });
});

describe('alignment result', () => {
  const questions = [
    { text: 'Scope?', options: ['A', 'B'], intended: 0 },
    { text: 'Timing?', options: ['A', 'B'], intended: 1 },
    { text: 'Responsibility?', options: ['A', 'B'], intended: 0 },
  ];

  it('counts answers that differ from the intended meaning', () => {
    expect(countDifferences(questions, [1, 1, 1])).toBe(2);
    expect(countDifferences(questions, [0, 1, 0])).toBe(0);
  });

  it('treats an unclear or missing answer as a point to align', () => {
    expect(countDifferences(questions, [-1, 1, null])).toBe(2);
  });
});

describe('dashboard filtering', () => {
  const questionnaire = { search: 'Website redesign Northwind SP-2026-041', status: 'alignment' };

  it('matches text and status together', () => {
    expect(matchesQuestionnaire(questionnaire, 'northwind', 'alignment')).toBe(true);
    expect(matchesQuestionnaire(questionnaire, 'northwind', 'complete')).toBe(false);
    expect(matchesQuestionnaire(questionnaire, 'other client', 'all')).toBe(false);
  });
});
