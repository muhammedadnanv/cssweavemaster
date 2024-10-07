import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useCart } from '../context/CartContext';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-cream-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="py-2 text-center text-sm bg-cream-200 animate-pulse">
          <span className="font-bold">WE ARE DELIVERING ACROSS INDIA AND INTERNATIONALLY!</span>
        </div>
        <nav className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold text-green-800">
            <img src="https://i.postimg.cc/T3N2Cfkz/image.png" alt="Henna by Fathima" className="h-16 mx-auto object-cover" />
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-green-800">Home</Link>
            <Link to="/shop" className="hover:text-green-800">Shop</Link>
            <Link to="/services" className="hover:text-green-800">Services</Link>
            <Link to="/workshop" className="hover:text-green-800">Workshop</Link>
            <Link to="/contact" className="hover:text-green-800">Contact us</Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-8"
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="w-4 h-4" />
              </button>
            </form>
            <Link to="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
            <Heart className="w-6 h-6 cursor-pointer" />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 cursor-pointer" />
                  <Badge className="absolute -top-2 -right-2 bg-green-800">{cartItems.length}</Badge>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Your Cart</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {cartItems.map((item) => (
                  <DropdownMenuItem key={item.id} className="flex justify-between">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>₹{item.price * item.quantity}</span>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <strong>Total: ₹{totalPrice}</strong>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/cart">
                    <Button className="w-full">View Cart</Button>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Link to="/" className="hover:text-green-800" onClick={toggleMenu}>Home</Link>
              <Link to="/shop" className="hover:text-green-800" onClick={toggleMenu}>Shop</Link>
              <Link to="/services" className="hover:text-green-800" onClick={toggleMenu}>Services</Link>
              <Link to="/workshop" className="hover:text-green-800" onClick={toggleMenu}>Workshop</Link>
              <Link to="/contact" className="hover:text-green-800" onClick={toggleMenu}>Contact us</Link>
              <Link to="/login" className="hover:text-green-800" onClick={toggleMenu}>Login</Link>
              <Link to="/signup" className="hover:text-green-800" onClick={toggleMenu}>Sign Up</Link>
            </div>
            <form onSubmit={handleSearch} className="flex items-center py-4">
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow"
              />
              <button type="submit" className="ml-2">
                <Search className="w-6 h-6" />
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
