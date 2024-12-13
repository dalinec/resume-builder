import { cache } from "react";
import prisma from "./prisma";
import { env } from "@/env";

export type SubscriptionLevel = "free" | "pro" | "pro_plus";

//we use on multiple pages but calls only 1 time to the db
export const getUserSubscriptionLevel = cache(
  async (userId: string): Promise<SubscriptionLevel> => {
    const subscription = await prisma.userSubscription.findUnique({
      where: {
        userId,
      },
    });

    if (!subscription || subscription.stripeCurrentPeriodEnd < new Date()) {
      return "free";
    }
    if (subscription.stripePriceId == env.NEXT_PUBLIC_STRIPE_ID_PRO_MONTLY) {
      return "pro";
    }
    if (
      subscription.stripePriceId == env.NEXT_PUBLIC_STRIPE_ID_PRO_PLUS_MONTLY
    ) {
      return "pro_plus";
    }

    throw new Error("Invalid subscription.");
  },
);
