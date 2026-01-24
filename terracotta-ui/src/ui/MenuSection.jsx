import React from "react";

function Money({ value }) {
  return <span className="text-primary font-bold">${Number(value).toFixed(0)}</span>;
}

function Tags({ tags }) {
  if (!tags?.length) return null;
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map(t => (
        <span
          key={t}
          className="px-2 py-0.5 bg-background-light dark:bg-white/10 text-[10px] font-bold rounded uppercase tracking-wider text-muted-brown dark:text-white/70"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function MenuSection({ section }) {
  const isSmallPlates = section.id === "small-plates";
  return (
    <div className="mb-12">
      <div className="flex items-end justify-between px-2 mb-6">
        <h2 className="text-3xl font-black tracking-tight">{section.title}</h2>
        {section.hours ? (
          <p className="text-muted-brown dark:text-white/40 text-xs font-medium italic">
            Available from {section.hours}
          </p>
        ) : null}
      </div>

      {isSmallPlates ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {(section.items ?? []).map(item => (
            <div
              key={item.id}
              className="group flex flex-col bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <div
                className="relative w-full aspect-[16/10] bg-center bg-cover"
                style={{ backgroundImage: `url("${item.imageUrl ?? ""}")` }}
              >
                {item.badge ? (
                  <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-black px-2 py-1 rounded shadow-lg uppercase tracking-widest">
                    {item.badge}
                  </span>
                ) : null}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <Money value={item.price} />
                </div>
                <p className="text-muted-brown dark:text-white/60 text-sm font-normal leading-relaxed mb-4">
                  {item.description}
                </p>
                <Tags tags={item.tags} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
          {(section.items ?? []).map(item => (
            <div
              key={item.id}
              className="flex gap-6 bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border border-transparent hover:border-primary/20 transition-all"
            >
              <div
                className="w-32 h-32 flex-shrink-0 bg-center bg-cover rounded-lg"
                style={{ backgroundImage: `url("${item.imageUrl ?? ""}")` }}
              />
              <div className="flex flex-col justify-center">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <span className="ml-4">
                    <Money value={item.price} />
                  </span>
                </div>
                <p className="text-muted-brown dark:text-white/60 text-sm font-light mb-3">
                  {item.description}
                </p>
                <Tags tags={item.tags} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}