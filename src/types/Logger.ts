/**
 * © Copyright Outburn Ltd. 2022-2023 All Rights Reserved
 *   Project name: FUME-COMMUNITY
 */
export interface ILogger {
  info: (msg: any) => void
  warn: (msg: any) => void
  error: (msg: any) => void
};
