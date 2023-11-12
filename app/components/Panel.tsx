type PanelProps = React.PropsWithChildren<{
  header: string;
}>;

export function Panel({ header, children }: PanelProps) {
  return (
    <div className="">
      <div className="">
        <span className="text-lg  font-bold">{header}</span>
      </div>
      <div className="ais-Panel-body">{children}</div>
    </div>
  );
}
