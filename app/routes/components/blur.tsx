export function Blur() {
  return (
    <div>
      <span
        className="absolute -z-0 left-56 lg:top-50  w-24 h-24 rotate-90 
              skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600
              blur-xl opacity-60 lg:opacity-95 "
      ></span>
      <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
    </div>
  );
}
