export interface SpeechRecognitionTranscription {
  text: string;
  finished: boolean;
  // confidence: number; // TODO some day
}

export interface SpeechRecognitionOptions {
  /**
   * Example: "nl-NL".
   * Default: the system locale.
   */
  locale?: string;

  /**
   * Set to true to get results back continuously.
   */
  returnPartialResults?: boolean;

  /**
   * The callback function invoked when speech is recognized.
   * @param transcription
   */
  onResult: (transcription: SpeechRecognitionTranscription) => void;

  /**
   * TODO iOS, README
   * The callback function invoked when an error occurs during speech recognition
   * @param error:
   *   - iOS: (string) description of the error.
   *   - Android: (number) 'ERROR_*' constant from https://developer.android.com/reference/android/speech/SpeechRecognizer.
   */
  onError?: (error: string | number) => void;
}

export interface SpeechRecognitionApi {
  available(): Promise<boolean>;
  requestPermission(): Promise<boolean>;
  startListening(options: SpeechRecognitionOptions): Promise<boolean>;
  stopListening(): Promise<void>;
}
