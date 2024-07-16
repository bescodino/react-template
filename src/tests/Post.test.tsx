import { render, screen } from '@testing-library/react'
import { Post, PostType } from '../components/Post/Post'
import { describe, expect, it } from 'vitest'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

const mockPost: PostType = {
    "id": 1,
    "publishedAt": new Date("2022-05-03 20:00:00"),
    "author":
    {
        "avatarUrl":"https://github.com/bescodino.png",
        "name":"Bruno Escodino",
        "role":"Desenvolvedor"
    },
        "content":[
        {
            "type":"paragraph",
            "content":"Opa, teste"
        },
        {
            "type":"paragraph",
            "content":"Bem vindo a um exemplo de react 🚀"
        }],
         
}
describe('Post component', () => {
    it('renders the post content correctly', () => {
      render(<Post post={mockPost} />);
  
      expect(screen.getByText(mockPost.author.name)).toBeDefined();
      expect(screen.getByText(mockPost.author.role)).toBeDefined();
    });
  
    it('formats the published date correctly', async () => {
      render(<Post post={mockPost} />);
  
      const publishedDateRelativeToNow = formatDistanceToNow(new Date(mockPost.publishedAt), {
        locale: ptBR,
        addSuffix: true
      });
    
      const publishedDateFormatted = await screen.findAllByText(publishedDateRelativeToNow);
        
      expect(publishedDateFormatted[0]).toBeDefined();
    });

    it('avatar render src correct', async () => {
        render(<Post post={mockPost} />);
    
        const avatar = await screen.getAllByRole('avatar');
        console.log(avatar)
        
        expect(avatar[0].getAttribute('src')).toBe(mockPost.author.avatarUrl);
      });

      it('comments render some string', async () => {
        render(<Post post={mockPost} />);
    
        const avatar = await screen.getAllByRole('comment-type');
        
        expect(avatar[0].children).toBeDefined();
      });  
   
  });