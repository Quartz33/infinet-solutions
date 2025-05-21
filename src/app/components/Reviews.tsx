import { Star } from "lucide-react";

export function Reviews() {
    return (
      <div className="flex flex-wrap items-center gap-4 cl-brown">
        {/* Stars & Review Info */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} fill="currentColor" stroke="black" />
                ))}
            </div>
            <span className="lg:text-lg text-sm italic pt-1">5.0 From 40+ reviews</span>
          </div>
        </div>
      </div>
    );
}
