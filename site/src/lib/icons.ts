import {
  Circle, Star, Award, Shield, CheckCircle, CheckCircle2, Sparkles, Scissors,
  Stethoscope, Heart, Zap, Clock, Phone, Mail, MapPin, MessageCircle, Quote,
  Menu, X, ArrowRight, Send, Wrench, Hammer, Coffee, ShoppingBag, Truck,
  Users, ThumbsUp, Target, TrendingUp, Gift, Cake, Car, Flame, Leaf, Sun,
  Home, Building, Camera, Music, Dumbbell, Palette, Smile, Baby, Dog, Cat,
  ShieldCheck, Gem, Crown, Trophy, Feather, Wind, Droplet, Flower2,
  Package, Ruler, Calendar, ChevronDown, ChevronUp, Plus, Minus, MapPinned,
  Navigation, Globe, Headphones, CreditCard, BadgeCheck, Building2, HardHat, ArrowDown,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Circle, Star, Award, Shield, CheckCircle, CheckCircle2, Sparkles, Scissors,
  Stethoscope, Heart, Zap, Clock, Phone, Mail, MapPin, MessageCircle, Quote,
  Menu, X, ArrowRight, Send, Wrench, Hammer, Coffee, ShoppingBag, Truck,
  Users, ThumbsUp, Target, TrendingUp, Gift, Cake, Car, Flame, Leaf, Sun,
  Home, Building, Camera, Music, Dumbbell, Palette, Smile, Baby, Dog, Cat,
  ShieldCheck, Gem, Crown, Trophy, Feather, Wind, Droplet, Flower2,
  Package, Ruler, Calendar, ChevronDown, ChevronUp, Plus, Minus, MapPinned,
  Navigation, Globe, Headphones, CreditCard, BadgeCheck, Building2, HardHat, ArrowDown,
};

export function getIcon(nome: string): LucideIcon {
  return map[nome] ?? Circle;
}

export const availableIcons = Object.keys(map);
