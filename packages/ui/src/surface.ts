interface Surface {
  title: string;
  id: string;
  type:
    | string
    | 'image'
    | 'article'
    | 'code'
    | 'counterdown'
    | 'stat'
    | 'embed';
}
export type { Surface };
